import { CoinFlip } from "@/components/CoinFlip";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen gradient-night">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-night-foreground mb-4">
            📚 Ler ou Dormir? 🌙
          </h1>
          <p className="text-xl text-night-foreground/80 max-w-2xl mx-auto">
            Deixe a sorte decidir se você deve ler mais um capítulo ou ir descansar. 
            A moeda da sabedoria está aqui para te ajudar!
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/95 backdrop-blur-sm border-border/50">
            <CoinFlip />
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-night-foreground/60 text-sm">
            ✨ Que a sorte guie suas escolhas literárias ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
