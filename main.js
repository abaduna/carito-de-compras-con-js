const db = {
    methods:{
        find: (id)=>{
            return db.items.find(item => item.id === id )
        },
        remove: (items)=>{},
        
        items: forEach(item => {
            const producto = db.methods.find(item.id)
            producto.qty =  producto.qty - item.qty
            
        }),
    },
    items:[
        {
            id:0,
            title: "funko pop",
            qty: 5
        },
        {
            id:0,
            title: "funko pop",
            qty: 5
        },
        {
            id:0,
            title: "funko pop",
            qty: 5
        },
        {
            id:0,
            title: "funko pop",
            qty: 5
        },
    ]
}
const shopingcart = {
    items: [],
    methodos:{
        add: (id,qty)=>{
             const cartoItem = shopingcart.methodos.get(id)   
             const index  = shopingcart.items.findIndex(item => item.id)


        },
        remove: (id,qty)=>{},
        contar: ()=>{},
        get: ()=>{},
        getTotal: ()=>{},
        hasInterventory: (id,qty)=>{},
        purchase: (id,qty)=>{},
    }
}

console.log(qty)  