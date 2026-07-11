import { Component } from '@angular/core'//Aqui estou importando o @Component

//Quando utilizo o @Component basicamente estou declarando que esta classe é um Component
@Component({
    selector: 'ola-mundo', //define como o componente será usado em outros templates.
    template: '<h1>Olá mundo</h1>' //define o HTML que será renderizado.
})

export class olaMundoComponent {

}