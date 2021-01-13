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

* a)
```
const updateActor = async (
      id: string,
      salary: number
    ): Promise<void> => {
      await connection("Actor").update({
        salary: salary
      })
      .where("id", id)
    }
    updateActor("05", 600000)
```
* b) 

```
const deleteActor = async (
      id: string
    ): Promise<void> => {
      await connection("Actor").delete()
      .where("id", id)
    }
    deleteActor("08")
```
* c)

```
const calcAverage = async (gender: string): Promise<any> => {
      const result = await connection("Actor").avg("salary")
      .where({gender})

      console.log(result[0])

      return result[0].average
    }
    
    calcAverage("male")
```


