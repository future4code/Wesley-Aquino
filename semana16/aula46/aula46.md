# Exercício 1

* a) A resposta com raw é exatamente como o banco mySQL responde, onde o primeiro array são as informações requeridas e o segundo array são metadados. Se quisermos buscar somente a informação necessária temos que usar index [0].

 b)
 ```
const getActorByName = async (id: string): Promise<any> => {
  
  try { const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${id}'
  `)
  console.log(result[0][0])

  return result[0][0]


  } catch (error) {
      console.log(error.sqlMessage || error.message)

    }
  }
  getActorByName("Juliana Paes")
```

c) 
```
const getActorByGender = async (gender: string): Promise<any> => {
  
    try { const result = await connection.raw(`
      SELECT COUNT('${gender}') FROM Actor WHERE gender = '${gender}'
    `)
    console.log(result[0])
  
    return result[0]
  
  
    } catch (error) {
        console.log(error.sqlMessage || error.message)
  
      }
    }
    getActorByGender("female")
```

# Exercício 2


