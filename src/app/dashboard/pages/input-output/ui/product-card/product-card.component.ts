import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  //enviamos info del producto al Product Card
  //recibimos el producto
      //manera tradicional
      // @Input({
      //   required: true,
      // })
      // public product!: Product;
  public product = input.required<Product>();

      //manera tradicional
      // @Output()
      // public onIncrementQuantity = new EventEmitter<number>();
  public onIncrementQuantity = output<number>();

  //nos creamos un método y es lo que mandamos llamar cuando se hace click en el botón del product-card.html
  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }
}
