let obj = Object.assign({ b: 'c' },
    Object.defineProperty({}, 'invisible', {
         enumerable: false,
         value: 'hello world'
     })
 )
 console.log(obj);