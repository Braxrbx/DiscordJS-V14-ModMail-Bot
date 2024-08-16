module.exports = {
    client: {
        token: '', // ← Your bot token (.env IS RECOMMENDED)
        id: '1272708774628429888' // ← Your bot ID
    },
    modmail: {
        guildId: '1216118974702551230', // ← Your server ID
        categoryId: '1224102301057421392', // ← The modmail category ID
        staffRoles: ['1274110758321524818'], // ← The modmail staff roles IDs
        mentionStaffRolesOnNewMail: true // ← Mention staff roles when there is a new mail?
    },
    logs: {
        webhookURL: 'https://discord.com/api/webhooks/1274137624528945192/fAaQU9fdY2V1Mbzmvdc5y3fO_I_ZM4dboT6-bPJR8x1JDwZ7OkDXxssebFw6O7-fG2n6' // ← The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
    }
};
