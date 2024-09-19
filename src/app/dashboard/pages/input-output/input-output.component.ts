import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '@interfaces/product.interface';
import { interval, pipe, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], //importamos el el componente ProductCard
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
//OnDestroy para que al volver a entrar no siga emitiendo y limpie
export default class InputOutputComponent implements OnDestroy {

  //creamos nueva señal para alojar los productos de la interface Product
  public products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 0,
    },
  ]);

  //nos creamos un intervalo de tiempo para insertar hasta 7 productos
  private intervalSubscription = interval(1000).pipe(
    //se dispara si tenemos una suscripción activa y actualizamos los productos, con el update nos devuelve el valor de los productos
    tap(() => {
      this.products.update( (products => [
        ...products, //productos actuales
        { //agregamos nuevo producto
          id: products.length + 1,
          name: `Product ${products.length + 1}`,
          quantity: 0,
        },
      ]) );
    }),
    take(7) //para que no pase de 7 productos. Después de 7 se limpia y no hace más
    //subscribe para que se ejecute inmediatamente
  ).subscribe();

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }


}
