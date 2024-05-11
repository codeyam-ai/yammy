import { RelatedProduct } from "./page";

interface RelatedProductItemProps {
  relatedProduct: RelatedProduct;
}

const RelatedProductItem = ({ relatedProduct }: RelatedProductItemProps) => {
  return (
    <div key={relatedProduct.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={relatedProduct.imageSrc}
          alt={relatedProduct.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={relatedProduct.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {relatedProduct.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{relatedProduct.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{relatedProduct.price}</p>
      </div>
    </div>
  );
};

export default RelatedProductItem;
