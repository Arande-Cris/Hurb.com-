
const el = require ("../Hurb.com/Elements.hurb").hurb

class acessar{




 visitarpagina(){
   cy.visit(el.SITE);
   cy.get(el.ENTRAR).click();
   cy.get(el.CRIARCONTA).click();

  }


 criarconta(){
   cy.get(el.PREENCHERNOME).type(el.NOME);
   cy.get(el.PREENCHERSOBRENOME).type(el.SOBRENOME);
   cy.get(el.COOKIE).click();
   cy.get(el.PREENCHEREMAIL).type(el.EMAIL);
   cy.get(el.PREENCHERSENHA).type(el.SENHA);
   cy.get(el.CONFIRMARSENHA).type(el.SENHA);
   cy.get(el.SELECTPAIS).select(el.PAIS);
   cy.get(el.SELECTESTADO).select(el.ESTADO);
   cy.get(el.SELECTBOX).click();
   cy.get(el.BOTAOCRIAR).click();

  }

   
   
 LoginNaConta(){
   cy.visit(el.SITE);
   cy.get(el.ENTRAR).click();
   cy.get(el.PREENCHEREMAIL).type(el.EMAIL);
   cy.get(el.PREENCHERSENHA).type(el.SENHA);
   cy.get(el.BOTAOENTRAR).click();

  }


    
  AlterarInfoPessoais(){
   // cy.get('.hrc-173nT',{delet:20000}).click()
    cy.get(el.COOKIE).click();
    cy.get(el.PERFIL).click();
    cy.get(el.INFOPESSOAIS).click();
    cy.get(el.ANIVERSARIO).type(el.DATA);
    cy.get(el.GENERO).click();
    cy.get(el.PREENCHERTELEFONE).type(el.TELEFONE);
    cy.get(el.PREENCHERCELULAR).type(el.CELULAR);
    cy.get(el.SELECTBOX2).click();
    cy.get(el.SELECTBOX3).click();
    cy.get(el.BOTAOSALVAR).click();

  }

  NavegarEmMinhasViagens(){
    cy.get(el.MINHASVIAGENS).click();
    cy.get(el.PREENCHEREMAIL).type(el.EMAIL);
    cy.get(el.PREENCHERSENHA).type(el.SENHA);
    cy.get(el.BOTAOCRIAR).click();
    cy.get(el.COOKIE).click();
    cy.get(el.STATUSPAGAMENTO).click();
    cy.get(el.FILTRO1).click();
    cy.get(el.FILTRO2).click();
    cy.get(el.FILTRO3).click();
    cy.get(el.APLICAR).click();

  }


  VisitarCreditos(){
    cy.get(el.MEUSCREDITOS).click();
    cy.get(el.PREENCHEREMAIL).type(el.EMAIL);
    cy.get(el.PREENCHERSENHA).type(el.SENHA);
    cy.get(el.BOTAOCRIAR).click();

  }


  VerificarSolicitacoes(){
   cy.get(el.SOLICITACOES).click();


  }
    
    
  // ConvidarUmAmigo(){
  //   cy.get(el.CONVIDARAMIGO).click();
 
  

  SairDaConta(){
    cy.get(el.Botao).click()
    cy.get(el.SAIR).click() 

  }
    
    
}
export default new acessar

