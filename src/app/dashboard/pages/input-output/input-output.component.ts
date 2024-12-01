import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { interval, take, tap } from 'rxjs';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy {
  public products = signal([
    {
      id: 1,
      name: 'Product 1',
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 5,
    },
  ]);

  private intervaleSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((products) => [
          ...products,
          {
            id: products.length + 1,
            name: `Product ${products.length + 1}`,
            quantity: 0,
          },
        ]);
      }),
      take(7)
    )
    .subscribe();

  ngOnDestroy(): void {
    this.intervaleSubscription.unsubscribe();
  }

  public updateProduct(product: Product, quantity: number) {
    this.products.update((products) =>
      products.map((p) => (p.id === product.id ? { ...p, quantity } : p))
    );
  }
}
