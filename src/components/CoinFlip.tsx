import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Moon } from "lucide-react";

interface CoinFlipProps {
  onResult?: (result: "read" | "sleep") => void;
}

export const CoinFlip = ({ onResult }: CoinFlipProps) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<"read" | "sleep" | null>(null);
  const [showResult, setShowResult] = useState(false);

  const flipCoin = () => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    setShowResult(false);
    setResult(null);
    
    // Random result
    const outcomes: ("read" | "sleep")[] = ["read", "sleep"];
    const randomResult = outcomes[Math.floor(Math.random() * outcomes.length)];
    
    // Show result after animation
    setTimeout(() => {
      setResult(randomResult);
      setIsFlipping(false);
      setShowResult(true);
      onResult?.(randomResult);
    }, 1000);
  };

  const resetCoin = () => {
    setResult(null);
    setShowResult(false);
    setIsFlipping(false);
  };

  const coinIsBack = result === "sleep";

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Coin */}
      <div className="relative">
        <div
          className={`coin relative w-48 h-48 cursor-pointer hover:scale-105 transition-transform duration-700 ${
            coinIsBack ? "coin--back" : ""
          } ${isFlipping ? "coin--flip" : ""}`}
          onClick={flipCoin}
        >
          {/* Front face - Read */}
          <Card className="coin-face absolute inset-0 rounded-full flex flex-col items-center justify-center gradient-coin border-4 border-coin-shadow shadow-2xl">
            <BookOpen className="w-16 h-16 text-night-foreground mb-2" />
            <p className="text-night-foreground font-bold text-lg text-center px-4">
              Ler mais um capítulo
            </p>
          </Card>

          {/* Back face - Sleep */}
          <Card className="coin-face coin-face--back absolute inset-0 rounded-full flex flex-col items-center justify-center bg-secondary border-4 border-secondary shadow-2xl">
            <Moon className="w-16 h-16 text-secondary-foreground mb-2" />
            <p className="text-secondary-foreground font-bold text-lg text-center px-4">
              É melhor ir dormir
            </p>
          </Card>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 w-48 h-48 rounded-full gradient-glow -z-10 blur-xl opacity-50" />
      </div>

      {/* Result Display */}
      {showResult && result && (
        <Card className="p-6 max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              {result === "read" ? (
                <BookOpen className="w-6 h-6 text-book" />
              ) : (
                <Moon className="w-6 h-6 text-dream" />
              )}
              <h3 className="text-xl font-semibold">A moeda decidiu!</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              {result === "read"
                ? "🎭 Mais uma aventura aguarda entre as páginas!"
                : "🌙 Hora de descansar e sonhares com novas histórias!"}
            </p>
          </div>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={flipCoin} 
          disabled={isFlipping}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {isFlipping ? "Girando..." : "🪙 Lançar Moeda"}
        </Button>
        
        {showResult && (
          <Button 
            onClick={resetCoin} 
            variant="outline" 
            size="lg"
          >
            ↻ Lançar Novamente
          </Button>
        )}
      </div>

      {/* Instructions */}
      {!showResult && !isFlipping && (
        <p className="text-muted-foreground text-center max-w-md">
          Clica na moeda ou no botão para descobrir se deves ler mais um capítulo ou ir dormir! 📚✨
        </p>
      )}
    </div>
  );
};