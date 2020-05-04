// Rectangle


//FUNCTION TO CALCULATE AREA RECTANGLE / MENGHITUNG LUAS PERSEGI PANJANG
//MAKE WHERE CONDITIONS TO CHECK WHETHER THE USER INPUT IS A NUMBER / MEMBUAT  KONDISI DIMANA UNTUK MENGECEK APAKAH YANG USER INPUT ADALAH ANGKA

function areaRectangle(length,width){
    if(typeof length != "number" && typeof width != "number"){
     throw new Error("input should be number!")
    }else{
        return length*width;
    }
  }
  
  //FUNCTION TO CALCULATE PERIMETER RECTANGLE / MENGHITUNG KELILING PERSEGI PANJANG
  //MAKE WHERE CONDITIONS TO CHECK WHETHER THE USER INPUT IS A NUMBER / MEMBUAT  KONDISI DIMANA UNTUK MENGECEK APAKAH YANG USER INPUT ADALAH ANGKA
  function perimeterRectangle(length,width){
   if(typeof length != "number" && typeof width != "number"){
     throw new Error("input should be number!")
     }else
     {
        return (2*length)+(2*width);
     }
  }
  
  try {
          console.log(areaRectangle("hello world")); //ERROR BECAUSE USER INCLUDES TYPES OF DATA STRING
      } catch (err){
          console.log(err.message)
  }
  
  try {
          console.log(perimeterRectangle(6,4)); //20
      } catch (err){
          console.log(err.message)
  }
  