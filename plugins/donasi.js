let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085240646336]
│ • Gopay [085240646336]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285240646336
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
