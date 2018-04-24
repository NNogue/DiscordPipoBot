const Discord = require('discord.js');
const client = new Discord.Client();

const respostes_lag = ['No estic allà..................\n    Dani\n    Ara','El lag no existe, son los padres <:pp:421822378490855424>','FIBRA ÒSTICA REAL YA!','NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO','🇱 🇴 🇻 🇪      🇱 🇦 🇬','PIPO NUNCA MUERE!','PING IS OVER 9000!!!','MARTILLAZO DE THOR INCOMING! 🙃'];
const respostes_pipo_muere = ['PIPO NUNCA MUERE! <:pipo:421819207169212416>', 'NO']

client.on('ready', () => {
    console.log('Ready!');
});

client.login('NDM4MDU2NTI0ODg4Mjc3MDAz.Db_F5g.dVU_5IrQwVZAefyPtM80WK0ICjY');

resposta_lag = 0;
resposta_pipo_muere = 0;

client.on('message', message => {

    console.log(message.content);
    if (/la*g/i.test(message.content) && respostes_lag[resposta_lag] != message.content) {
    	resposta_lag = Math.floor(Math.random() * respostes_lag.length);
	    message.channel.send(respostes_lag[resposta_lag]);
	}
	else if (/pi.*po [muere,dies,mor]/i.test(message.content) && respostes_pipo_muere[resposta_pipo_muere] != message.content) {
		resposta_pipo_muere = Math.floor(Math.random() * respostes_pipo_muere.length);
		message.channel.send(respostes_pipo_muere[resposta_pipo_muere]);
	}
});

