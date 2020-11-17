const GoogleSpreadsheet = require('google-spreadsheet/lib/GoogleSpreadsheet');

const creds = require('./service-account-creds.json');


// spreadsheet key is the long id in the sheets URL

// Config variables
//const SPREADSHEET_ID = '1AUpqmdcLd-OzoR26MiE75Y4NUToa7axra0d4qV3-HRI';

//const SPREADSHEET_ID = '1pn8HzeQpq3FYqgLm9bq4jSu6tYXKc_ydWvywg3bEoLI';
const SPREADSHEET_ID = '1OQYhsuhVx3P5c3UZZLeFVcNQNzU4or41oT5GchzpQqA';
const SHEET_ID = 0;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const getSpreadsheet = async () => {
  try {
    await doc.useServiceAccountAuth(creds);
    // loads document properties and worksheets
    await doc.loadInfo();


    const sheet = doc.sheetsById[SHEET_ID];

    const rows = await sheet.getRows(); // can pass in { limit, offset }{ offset: 4, limit: 1 }
   // const cells= await sheet.loadCells('A2:P873'); // loads a range of cells


   //const rows = await sheet.getRows(); // can pass in { limit, offset }{ offset: 4, limit: 1 }

    //const rowDesire = [rows.find((row) => row._rawData === '985')];
 //   console.log(rows);

   // console.log(sheet); // 2

//    const sweeterArray = rows.map((item) =>{
//     let rObj = {};
//     rObj.item = [item.your_reserve, item.your_date, item.your_mariachi, item.your_address, item.your_name,
//       item.your_tel, item.your_email, item.your_service,item.your_price, item.your_message];
//     return rObj;
// });

const rowss = rows.filter((row) => {
 

  return row.Coodinador !=='' && row.your_reserve!== '';
  });

  const rowId = rows.filter((row)=> row.your_reserve==='995');

 


const sweeterArray = rowss.map((item) =>{
  let reser={
      reserve: item.your_reserve,
      id: item.your_reserve,
      date : item.your_date,
      mariachi : item.your_mariachi,
      address : item.your_address,
      firstname : item.your_name,
      phone: item.your_tel,
      email :item.your_email,
      service : item.your_service,
      price : item.your_price,
      message : item.your_message,
      coodinator :item.Coodinador,
      deposit : item.Deposito,
      remainder: item.your_price-item.Deposito,
      playlist: item.playlist

  };

  return reser;
});




const data= {
  badges:sweeterArray.slice(sweeterArray.length-20,sweeterArray.length)
}


//const rebels = sweeterArray.filter((row) => row.Coodinador ==='Richard');




//console.log(data)
console.log(rowId);





//   let start = new Date('10/18/2020');
//   let end   = new Date('25/18/2020');

//   const rebelsDate = sweeterArray.filter((item) => {
//    let date = new Date(item.your_date);
//    return (date >= start && date <= end);
//   });

// console.log(rebelsDate);

    //console.log([rows[0].id, rows[0].Name, rows[0].Value]); // 'Larry Page'

    //  console.log(rows[871]); // 2

    //  console.log(rows[871].your_reserve); // 2

    //  console.log(rowDesire); // 2


    // rows[871].your_reserve = 985;
    // await rows[871].save(); // save updates


    // console.log(rows[871].your_reserve); // 2
    // const officersIds = rows.map(i => rows.keys.your_reserve);
    // console.log(officersIds); // 2

   // console.log(cells.cellStats);


   let today = new Date();

   let otraFecha = new Date('10/20/2020 4:00 PM');
   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


   console.log(otraFecha.toLocaleTimeString());
   console.log(otraFecha.toLocaleDateString('es-MX', options));

   console.log(today.toLocaleTimeString());
   console.log(today.toLocaleDateString('es-MX', options));




  } catch (e) {
    console.error('Error Puto: ', e);
  }
};




getSpreadsheet();