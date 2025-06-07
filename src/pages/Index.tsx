
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Droplet, Heart, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              FizzPop
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Experience the Ultimate Refreshment with Our Signature Sodas
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full font-semibold">
              Taste the Fizz
            </Button>
          </div>
        </div>
        
        {/* Floating bubbles animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-300/50 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-300/40 rounded-full animate-bounce delay-100"></div>
          <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-blue-300/30 rounded-full animate-pulse delay-200"></div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
            Our Signature Flavors
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-orange-100 to-orange-200">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-800">Orange Burst</h3>
                <p className="text-orange-700">
                  A citrusy explosion that awakens your senses with every sip
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-100 to-blue-200">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Droplet className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Cool Blue</h3>
                <p className="text-blue-700">
                  Refreshing berry blend that cools you down on the hottest days
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-pink-100 to-pink-200">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pink-800">Cherry Love</h3>
                <p className="text-pink-700">
                  Sweet cherry goodness that brings joy to every moment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">Our Story</h2>
              <p className="text-xl mb-6 leading-relaxed">
                Founded in 2020, FizzPop was born from a simple dream - to create the perfect soda that brings people together. 
                Using only natural ingredients and time-tested recipes, we craft each bottle with love and care.
              </p>
              <p className="text-lg opacity-90">
                Today, millions of people around the world enjoy our refreshing sodas, making every moment a little more special.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center">
                <div className="text-6xl">🥤</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
            What People Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "FizzPop's Orange Burst is absolutely amazing! It's become my go-to drink for every occasion."
                </p>
                <div className="font-semibold text-gray-800">- Sarah M.</div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I've tried many sodas, but nothing compares to the refreshing taste of Cool Blue. Simply perfect!"
                </p>
                <div className="font-semibold text-gray-800">- Mike R.</div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Cherry Love brings back childhood memories. The taste is authentic and absolutely delicious!"
                </p>
                <div className="font-semibold text-gray-800">- Emma L.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8">Ready to Experience the Fizz?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers and discover your new favorite soda today!
          </p>
          <Button className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold">
            Find a Store Near You
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                FizzPop
              </h3>
              <p className="text-gray-400">
                Bringing refreshment and joy to every moment since 2020.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Orange Burst</li>
                <li>Cool Blue</li>
                <li>Cherry Love</li>
                <li>Limited Editions</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>TikTok</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FizzPop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
