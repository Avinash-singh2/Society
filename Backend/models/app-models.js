import { Sequelize } from "sequelize";

export const jk_finance_db = new Sequelize("jk_finance","root","avinash",{
    dialect:"mysql"
})

export const jk_finance_User=jk_finance_db.define('register',{
   
   
    name:{
        type: Sequelize.DataTypes.STRING
    },
    email:{
        type: Sequelize.DataTypes.STRING
    },
    password:{
        type: Sequelize.DataTypes.STRING,
        
    }
   },{
    tableName: 'register',
    feezeTableName:true,
    timestamps: false
   });