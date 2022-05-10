//Ejercicio POO 1:

//------------------------------------------------------------



class persona{
    constructor(nombre,edad,genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    otbDetalles(){
        console.log(`mi nombre es ${this.nombre} tengo ${this.edad} años , y ${this.genero}` )
    }
}

let pepe = new persona('pepe','25','nose')
console.log(pepe)
pepe.otbDetalles()



//------------------------------------------------------------



class estudiante extends persona{
    constructor(nombre,edad,genero,curso,grupo){
        super(nombre,edad,genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(){
        console.log(`mi nombre es ${this.nombre} tengo ${this.edad} años , y ${this.genero} ,registra ${this.curso} , en grupo ${this.grupo}`)
    }
}

let Juan = new estudiante('Juan','15','nose','3º','FSteam')
console.log(Juan)
Juan.registrar()




//------------------------------------------------------------




class profesor extends persona{
    constructor(nombre,edad,genero,asignatura,nivel){
        super(nombre,edad,genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
        console.log(`mi nombre es ${this.nombre} tengo ${this.edad} años , y ${this.genero}, soy de ${this.asignatura} ,de nivel ${this.nivel}`)
    }
}

let pepito = new profesor('Matematica','alto')
console.log(pepito)
pepito.asignar()


//------------------------------------------------------------

//Extras:

//------------------------------------------------------------



class warrior{
    constructor(life,power){
     this.life = life;
     this.power = power;
    }
    attack(){
        return this.power
    }
    defend(damage){
        console.log('hola')
        this.life = this.life - damage
    }
}

let poder = new warrior(100,80)
console.log(poder)



//------------------------------------------------------------

class Maya extends warrior{
    constructor(life,power,colaCao){
        super(life,power)
        this.colaCao = colaCao;
    }
    drinkColaCao(){
        console.log(`por tomar colacao el guerrero de maya suma ${this.colaCao} de poder`)
        this.power = this.power + this.colaCao
    }
}

let guerreroMaya = new Maya(100,80,10)
console.log(guerreroMaya)
guerreroMaya.drinkColaCao()
console.log(guerreroMaya)


//------------------------------------------------------------


class Aztec extends warrior{
    constructor(life,power,nesquik){
        super(life,power)
        this.nesquik = nesquik;
    }
    drinkNesquik(){
        console.log(`por tomar newquik el guerrero de maya tiense ${this.life + this.nesquik} de vida`)
        this.life = this.life + this.nesquik
    }
    
}

let guerreroAztec = new Aztec(100,80,10)
console.log(guerreroAztec)
guerreroAztec.drinkNesquik()
console.log(guerreroAztec)

//------------------------------------------------------------

//Extra01:

//------------------------------------------------------------



class Gallery{
    constructor(getRandomCivil,getRandomMilitary){
        this.getRandomCivil = getRandomCivil;
        this.getRandomMilitary = getRandomMilitary;
    }
    getAll(){
        return this.getRandomCivil + this.getRandomMilitary
    }
}

class Painter{
    constructor(){
        
    }
}