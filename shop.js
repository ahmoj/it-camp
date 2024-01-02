let person = prompt('Koliko zelite novaca:');

const shop = prompt('Mozete kupiti 1.sok, 2.cokolada, 3.cigare, 4.jabuka, 5.zvake:');
const sok = 60;
const cokolada = 100;
const cigare = 220;
const jabuka = 80;
const zvake = 50;

switch(shop){
    case 'sok':
        if(person >= sok){
            person = person - sok
            console.log(`Kupili ste ${shop} i ostalo vam je ${person}`)
        }
        else if(person < sok){
            let choice = prompt(`Nemate dovoljno para, da li zelit da se uzajmite?`)
            switch(choice){
                case 'da':
                   const novac = prompt('Koliko zelite da se uzajmite?')
                   if(novac >= sok){
                       console.log(`Sada imate ${novac}`)
                       person = novac - sok
                       console.log(`Kupili ste ${shop} i ostalo vam je ${person}`)
                   }
                   else if(novac < sok){
                       console.log('Nemate dovoljno para, uzajmite se vise.')
                       break;
                   } 
                   break;
                case 'ne':
                    console.log(`Nemate dovoljno para...`)
                    break;
               } 
               break;
            }
            break;
    case 'cokolada':
        if(person >= cokolada){
            person = person - cokolada
            console.log(`Kupili ste ${shop} i ostalo vam je ${person}`)
        }
        else if(person <= cokolada){
            let choice = prompt(`Nemate dovoljno para, da li zelit da se uzajmite?`)
            switch(choice){
                case 'da':
                   const novac = prompt('Koliko zelite da se uzajmite?')
                   if(novac >= cokolada){
                       console.log(`Sada imate ${novac}`)
                       person = novac - cokolada
                       console.log(`Kupili ste ${shop} i ostalo vam je ${person}`)
                   }
                    else if(novac < cokolada){
                       console.log('Nemate dovoljno para, uzajmite se vise.')
                       break;
                   } 
                  break;
                case 'ne':
                    console.log(`Nemate dovoljno para...`)
                    break;
               } 
               break;
            }  
            break;
    case 'cigare':
        if(person >= cigare){
            person = person - cigare
            console.log(`Kupili ste ${shop} i ostalo vam je ${person}`)
        }
        else if(person <= cigare){
            let choice = prompt(`Nemate dovoljno para, da li zelit da se uzajmite?`)
            switch(choice){
                case 'da':
                   const novac = prompt('Koliko zelite da se uzajmite?')
                   if(novac >= cigare){
                    console.log(`Sada imate ${novac}`)
                    person = novac - cigare
                    console.log(`Kupili ste ${shop} i ostalo vam je ${person}`)
                }
                else if(novac < cigare){
                    console.log('Nemate dovoljno para, uzajmite se vise.')
                    break;
                } 
                break;
                case 'ne':
                    console.log(`Nemate dovoljno para...`)
                    break;
               } 
               break;
            }          
            break;   
    case 'jabuka':
        if(person >= jabuka){
            person = person - jabuka
            console.log(`Kupili ste ${shop} i ostalo vam je ${person}`)
        }
        else if(person <= jabuka){
            let choice = prompt(`Nemate dovoljno para, da li zelit da se uzajmite?`)
            switch(choice){
                case 'da':
                   const novac = prompt('Koliko zelite da se uzajmite?')
                   if(novac >= jabuka){
                    console.log(`Sada imate ${novac}`)
                    person = novac - jabuka
                    console.log(`Kupili ste ${shop} i ostalo vam je ${person}`)
                }
                else if(novac < jabuka){
                    console.log('Nemate dovoljno para, uzajmite se vise.')
                    break;
                } 
                break;
                case 'ne':
                    console.log(`Nemate dovoljno para...`)
                    break;
               } 
               break;
            }   
            break;
    case 'zvake':
        if(person >= zvake){
            person = person - zvake
            console.log(`Kupili ste ${shop} i ostalo vam je ${person}`)
        }
        else if(person <= zvake){
            let choice = prompt(`Nemate dovoljno para, da li zelit da se uzajmite?`)
            switch(choice){
                case 'da':
                   const novac = prompt('Koliko zelite da se uzajmite?')
                   if(novac >= zvake){
                    console.log(`Sada imate ${novac}`)
                    person = novac - zvake
                    console.log(`Kupili ste ${shop} i ostalo vam je ${person}`)
                }
                else if(novac < zvake){
                    console.log('Nemate dovoljno para, uzajmite se vise.')
                    break;
                } 
                   break;
                case 'ne':
                    console.log(`Nemate dovoljno para...`)
                    break;
               } 
               break;
            }              
            break;
  }