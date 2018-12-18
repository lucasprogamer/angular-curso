import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {

  };

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .pipe(
      map( res => res)
    )
    .subscribe(dados => console.log(dados));
  }

  /**
   *  Verifica se o valor do campo é valido e se ele foi clicado
   * @any campo
   */
  checkHasErrors(campo: { valid: any; touched: any; }) {

   return  !campo.valid && campo.touched;
  }

  /**
   *  exibe os estilos de erro
   * @any campo
   */
  setCssErrors(campo: any) {
    return  {
      'is-danger' : this.checkHasErrors(campo)
    };
  }

  /**
   *  Consulta CEP com WEBService
   * @string cep
   */
  consultaCEP(cep: string, form: any) {

    // Nova variável "cep" somente com dígitos.
     cep = cep.replace(/\D/g, '');
     if (cep != null ) {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {

        this.resetCEPvalues(form);

          this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .pipe(
            map( dados => dados)
          )
          .subscribe(dados => this.setCEPValues(dados, form));
      }
     }
  }

  /**
   * Insere dados do webService no formulario
   * @any dados
   * @any form
   */
  setCEPValues(dados: any, form: any) {

    form.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }
  /**
   *  Reseta os valores do cep
   * @any form
   */
  resetCEPvalues(form) {
    form.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
