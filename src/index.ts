import app from "./app";
import { DataBaseConnection } from "./connection/connection";
const PORT =process.env.PORT || 5000


const start = async () => {
    try {
      await DataBaseConnection(); 
    } catch (error) {
      console.error(error);
    }

};

app.listen(PORT,()=>{
    console.log(PORT,'started');  
})

// Start the application
start();
