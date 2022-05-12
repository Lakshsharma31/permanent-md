let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
conn.sendHydrated(m.chat, 
`*––––––『 DONATE 』––––––*`, 
`ᴩᴀʏ :
Gpay : 919389379221
ppay : 919389379221
★ stay connected join support.`, './media/donate.jpg', 'https://chat.whatsapp.com/GCaeoSYTnxw3nd1GVz6Chu', '💜Support group🧧', null, null, [[`ᴍᴇɴᴜ`, `${usedPrefix}menu`]], m, {asLocation: true})
}
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler