import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecycle } from '@/context/RecycleContext';
import StepLayout from '@/components/StepLayout';
import { Star, Truck, Shield } from 'lucide-react';

const shops = [
  { id: 'shop1', name: 'Green Threads Recyclers', rating: 4.8, distance: '2.3 km', pickup: true, reviews: 234 },
  { id: 'shop2', name: 'EcoWear Collections', rating: 4.6, distance: '3.1 km', pickup: true, reviews: 189 },
  { id: 'shop3', name: 'Cloth Revival Hub', rating: 4.5, distance: '4.5 km', pickup: true, reviews: 156 },
  { id: 'shop4', name: 'ReNew Fabrics', rating: 4.3, distance: '5.2 km', pickup: false, reviews: 98 },
  { id: 'shop5', name: 'Second Life Textiles', rating: 4.7, distance: '6.0 km', pickup: true, reviews: 312 },
  { id: 'shop6', name: 'Sustainable Stitch', rating: 4.4, distance: '7.8 km', pickup: true, reviews: 145 },
];

const ShopsPage = () => {
  const navigate = useNavigate();
  const { state, update } = useRecycle();
  const [selected, setSelected] = useState(state.selectedShop);

  const handleNext = () => {
    update({ selectedShop: selected });
    navigate('/contact');
  };

  return (
    <StepLayout
      step={5}
      totalSteps={9}
      title="Select a Shop"
      subtitle={`Verified shops in ${state.district || 'your area'}`}
      onNext={handleNext}
      onBack={() => navigate('/categories')}
      nextDisabled={!selected}
    >
      <div className="mb-4 flex items-center gap-2 bg-accent/50 rounded-lg p-3">
        <Shield className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium text-accent-foreground">
          More than 3 verified shops guaranteed
        </span>
      </div>

      <div className="space-y-3">
        {shops.map((shop) => (
          <button
            key={shop.id}
            onClick={() => setSelected(shop.id)}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
              selected === shop.id
                ? 'border-primary bg-accent eco-shadow'
                : 'border-border bg-card hover:border-primary/30'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-foreground">{shop.name}</h3>
              <div className="flex items-center gap-1 text-secondary">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">{shop.rating}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{shop.distance}</span>
              <span>•</span>
              <span>{shop.reviews} reviews</span>
              {shop.pickup && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-primary">
                    <Truck className="w-3.5 h-3.5" /> Pickup
                  </span>
                </>
              )}
            </div>
          </button>
        ))}
      </div>
    </StepLayout>
  );
};

export default ShopsPage;
