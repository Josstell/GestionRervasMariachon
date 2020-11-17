const GoogleSpreadsheet = require('google-spreadsheet/lib/GoogleSpreadsheet');

const creds = require('./pruebas/service-account-creds.json');


const SPREADSHEET_ID = '1OQYhsuhVx3P5c3UZZLeFVcNQNzU4or41oT5GchzpQqA'; //Real
//const SPREADSHEET_ID = '1pn8HzeQpq3FYqgLm9bq4jSu6tYXKc_ydWvywg3bEoLI'; //DEmo
const SHEET_ID = 0;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);



const callApi = async (endpoint,rowId, updates) => {
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsById[SHEET_ID]; 
  const rows = await sheet.getRows(); 


    try {
      
  
      let rowss =undefined;

      if (!rowId){
        rowss = rows.filter((row) => {
          return row.your_name !=='' && row.your_reserve!== '';
     });
    }else{
        rowss = rows.filter((row)=> {
            return row.your_reserve===rowId;
        });
    }
    const sweeterArray = rowss.map((item) =>{
        let reser={
            reserve: item.your_reserve,
            id: item.your_reserve,
            date : item.your_date,
            mariachi : item.your_mariachi,
            address : item.your_address,
            firstName : item.your_name,
            phone: item.your_tel,
            email :item.your_email,
            service : item.your_service,
            price : item.your_price,
            message : item.your_message,
            coordinator : !item.Coodinador ? 'Pendiente a enviar!!!' : item.Coodinador,
            deposit : !item.Deposito ? '0' : item.Deposito ,
            remainders: item.your_price-item.Deposito,
            playlist: !item.Lista_de_canciones ? '' : item.Lista_de_canciones,
    
        };


    
        return reser;
    });
    

    const sweeterArray1= sweeterArray.filter((row) => { 
        return row.reserve !==undefined  || row.service!== undefined;
   });;
    

      const data= sweeterArray1.slice(sweeterArray1.length-20,sweeterArray1.length);
    
     // console.log('Tamaño del arra: ')
     // console.log(sweeterArray1.length);
    
      //console.log(data);
      if (updates && rowId){
       
        const rebelss = rows.filter((row) => row.your_reserve === updates[0].id);    
    
        const UpdateRow = rebelss[0]._rowNumber - 2;// - (rebelss[0]._rowNumber - rows.length);

       // console.log(rebelss);
    
    
        if(updates.firstName !=='') rows[UpdateRow].your_name = updates.firstName;
        if(updates.date !=='') rows[UpdateRow].your_date = updates.date;
        if(updates.mariachi !=='') rows[UpdateRow].your_mariachi = updates.mariachi;
        if(updates.address !=='') rows[UpdateRow].your_address = updates.address;
        if(updates.phone !=='') rows[UpdateRow].your_tel = updates.phone;
        if(updates.service !=='') rows[UpdateRow].your_service = updates.service;
        if(updates.price !=='') rows[UpdateRow].your_price = updates.price;
        if(updates.message !=='') rows[UpdateRow].your_message = updates.message;
        if(updates.deposit !=='') rows[UpdateRow].Deposito = updates.deposit;
        if(updates.playlist !=='') rows[UpdateRow].Lista_de_canciones = updates.playlist;
        if(updates.coordinator !=='' || updates.item !=='') rows[UpdateRow].Coodinador = updates.item;

        await rows[UpdateRow].save(); // save changes

        return false;

      }
       if (updates && rowId===''){

       // console.log('Estamos en actualizaciones  crear')
       // console.log(updates);
        

    
        const createRow = sweeterArray1.length+1;// - (rebelss[0]._rowNumber - rows.length);
        console.log(createRow);
    
        if(updates.code !=='') rows[createRow].your_reserve = updates.code;
        if(updates.firstName !=='') rows[createRow].your_name = updates.firstName;
        if(updates.email !=='') rows[createRow].your_email = updates.email;
        if(updates.date !=='') rows[createRow].your_date = updates.date;
        if(updates.mariachi !=='') rows[createRow].your_mariachi = updates.mariachi;
        if(updates.address !=='') rows[createRow].your_address = updates.address;
        if(updates.phone !=='') rows[createRow].your_tel = updates.phone;
        if(updates.service !=='') rows[createRow].your_service = updates.service;
        if(updates.price !=='') rows[createRow].your_price = updates.price;
        if(updates.message !=='') rows[createRow].your_message = updates.message;
        if(updates.deposit !=='') rows[createRow].Deposito = updates.deposit;
        if(updates.playlist !=='') rows[createRow].Lista_de_canciones = updates.playlist;
        if(updates.coordinator !=='' || updates.item !=='') rows[createRow].Coodinador = updates.item;

        await rows[createRow].save(); // save changes

        return false;
      }

    
        return data.reverse();
    
        } catch (e) {
        console.error('Error Puto: ', e);
        }
       
    };





const api = {
  badges: {
    list() {
      return callApi('/badges');
    },
    create(updates) {
     //   throw new Error('500 : Server error');
       return callApi(`/badges`,'', updates);
    },
    read(badgeId) {
      return callApi(`/badges/${badgeId}`,badgeId,'');
    },
    update(badgeId, updates) {
      return callApi(`/badges/${badgeId}`, badgeId, updates);
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(badgeId) {
      return callApi(`/badges/${badgeId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
