import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorwa}`, `${await conn.getName(nomorwa+'@s.whatsapp.net')}`, `CELIA `, `ITU OWNERKU JGN DI SPAM YA`, `6285771724948@s.whatsapp.net`, `Indonesia`, `https://urlis.net/94gtrj6n`, `Developer AYUCHAN - MD`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `Whatsapp Bot`, `Jangan Di Spam`, `Nothing`, `Indonesia`, `https://urlis.net/94gtrj6n`, `COPYRIGHT 2023`]
  ], m)
  let vn = "./vn/owner.mp3"
  await conn.sendFile(m.chat, vn, 'kuru.mp3', null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator)/i
export default handler