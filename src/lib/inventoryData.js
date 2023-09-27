export const orderItem = (_obj = [])=>{
    const arr =[]
     _obj.map((i)=>{
      const id = i.inventory?.id
      const quantity = i.quantity
      const data = {id,quantity}
      arr.push(data)
     })

     return arr
  }

