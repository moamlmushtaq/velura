import { NextResponse } from "next/server";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 1800 }); // تخزين البيانات لمدة 30 دقيقة

const GUILD_ID = "1347787985952837692"; // استبدل بـ ID السيرفر الخاص بك
const BOT_TOKEN = "MTE2NjE1NzAwMTk0MDgwNzc4MA.G2Bo8G.si_-ugZUa9ZJ-ESH_5b9BhFUoNdGgpEPh6phsk"; // استبدل بتوكن البوت (يجب أن يكون لديه صلاحيات قراءة الأعضاء)

// قائمة الإداريين بالـ ID الخاص بهم
const adminIDs = [
    { id: "308947999822970881", role: "المؤسس والمدير التنفيذي" }, // مؤمل مشتاق
    { id: "824661690716127232", role: "النائب والمسؤول الاول" }, // فيصل
    { id: "894603300849201172", role: "مدير المواقع والمشرف العام" }, // علي
    { id: "811730090341826571", role: "مديرة السوشيال ميديا والتصميم" }, // إيتو
    { id: "930477369003749437", role: "مبرمج ومطور" }, // محمد
];

export async function GET() {
    const cachedData = cache.get("teamData");
    if (cachedData) {
        console.log("✅ البيانات مسترجعة من التخزين المؤقت");
        return NextResponse.json({ team: cachedData });
    }

    const responses = await Promise.all(
        adminIDs.map(async (admin) => {
            const response = await fetch(`https://discord.com/api/v10/guilds/${GUILD_ID}/members/${admin.id}`, {
                headers: {
                    Authorization: `Bot ${BOT_TOKEN}`,
                    "User-Agent": "VeluraBot (https://velura.space, v1.0)",
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                console.warn(`⚠️ لم يتم العثور على العضو ${admin.id} - كود الاستجابة: ${response.status}`);
                return null;
            }

            const user = await response.json();

            return {
                id: admin.id,
                name: user.user?.username ?? "مجهول",
                role: admin.role,
                avatar: user.user?.avatar
                    ? `https://cdn.discordapp.com/avatars/${user.user.id}/${user.user.avatar}.png?size=128`
                    : "https://i.ibb.co/9W2WX5v/default-avatar.png",
            };
        })
    );

    const teamData = responses.filter((member) => member !== null);
    cache.set("teamData", teamData); // حفظ البيانات في التخزين المؤقت

    return NextResponse.json({ team: teamData });
}
