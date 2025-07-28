

export default function OrderCard({ order }) {
    function generateFakeKey() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const segmentLength = 4;
    const segmentsCount = 4;

    const segments = [];

    for (let i = 0; i < segmentsCount; i++) {
        let segment = '';
        for (let j = 0; j < segmentLength; j++) {
        segment += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        segments.push(segment);
    }

    return segments.join('-');
    }

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white dark:bg-zinc-900">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Orden #{order.id}</h4>
        <div className="text-sm text-muted-foreground mb-2">
            PayMethod: <span className="font-medium">{order.payment_method}</span>
        </div>
        <span className="text-sm text-muted-foreground">
          {new Date(order.created_at).toLocaleDateString()}
        </span>
      </div>
      <div className="font-bold mb-2">
        Total: ${order.total_amount}
      </div>
      

      <ul className="space-y-1">
        {order.items?.map((item) => (
          /*<li key={item.id} className="flex justify-between">
            <img src={item.product_image}className="w-16 h-16 object-cover rounded"/>
            <span>{item.product_name}</span>
            <span>x{item.quantity}</span>
            <span className="font-semibold">${item.price_at_purchase}</span>
          </li>*/
            <div key={item.id} className="flex justify-between items-center gap-4 py-2 border-b">
                <div className="flex gap-3 items-center max-w-[50%] overflow-hidden">
                    <img
                    src={item.product_image}
                    alt={item.product_name}
                    className="w-16 h-16 object-cover rounded"
                    />
                    <div className="truncate">
                    <h4 className="font-medium text-sm truncate">{item.product_name}</h4>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center min-w-[140px] text-center">
                    <p className="text-gray-600 text-sm">Cantidad: {item.quantity}</p>
                    <div className="flex flex-col items-center gap-1 mt-1">
                      {Array.from({ length: item.quantity }).map((_, index) => (
                        <p
                          key={index}
                          className="text-xs font-mono bg-black px-2 py-1 rounded shadow-sm"
                        >
                          {generateFakeKey()}
                        </p>
                      ))}
                    </div>
                </div>
                <div className="text-right min-w-[80px]">
                    <p className="font-semibold">{item.price_at_purchase}</p>
                </div>
            </div>

          
        ))}
      </ul>

      
    </div>
  );
}