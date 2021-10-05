/// <reference types="cypress" />


const el = require ("../Hurb.com/Elements.hurb").hurb

import acessar from "../../1-getting-started/Hurb.com/Index.hurb"

describe('validate Tests', () =>{
    
    it('Visitar site',() =>{
          acessar.visitarpagina()
         
    
     })

    
    
    
    it('Criar Uma conta',() =>{
         acessar.visitarpagina()
         acessar.criarconta()
    
        
     })

    it('Login Na Conta', () => {
         acessar.LoginNaConta() 


     })


    it('Alterar Informações Pessoais', () => {
        acessar.AlterarInfoPessoais()
        
  
     })


    it('Navegar Por Minhas Viagens', () => {
       acessar.NavegarEmMinhasViagens()


     })


     it('Acessar Créditos', () => {
          acessar.VisitarCreditos()
   
   
     })


     // it('Convidar Amigo', () => {
     //      acessar.ConvidarUmAmigo()
   
   
     // })

     it('Sair da Conta', () => {
          acessar.SairDaConta()
   
   
     })





    
    

  

    
  

 })
