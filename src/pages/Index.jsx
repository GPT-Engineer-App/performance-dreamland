import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Github, Paw, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats can jump up to six times their length.",
  "A cat's nose print is unique, like a human's fingerprint.",
  "Cats have 230 bones, while humans only have 206.",
  "The oldest known pet cat was found in a 9,500-year-old grave on Cyprus.",
  "A cat's hearing is much more sensitive than a human's or dog's.",
  "Cats can rotate their ears 180 degrees.",
];

const catBreeds = [
  { name: "Siamese", origin: "Thailand", personality: "Vocal, intelligent, and social" },
  { name: "Persian", origin: "Iran", personality: "Gentle, quiet, and dignified" },
  { name: "Maine Coon", origin: "United States", personality: "Friendly, playful, and large" },
  { name: "Bengal", origin: "United States", personality: "Active, energetic, and wild-looking" },
  { name: "British Shorthair", origin: "United Kingdom", personality: "Calm, easygoing, and affectionate" },
];

const Index = () => {
  const [catFact, setCatFact] = useState(catFacts[0]);
  const [currentBreedIndex, setCurrentBreedIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const generateCatFact = () => {
    const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    setCatFact(randomFact);
  };

  const nextBreed = () => {
    setCurrentBreedIndex((prevIndex) => (prevIndex + 1) % catBreeds.length);
  };

  const prevBreed = () => {
    setCurrentBreedIndex((prevIndex) => (prevIndex - 1 + catBreeds.length) % catBreeds.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 to-pink-100">
      <nav className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold flex items-center">
            <Paw className="mr-2" />
            CatWorld
          </h1>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300 transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-300">Gallery</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="flex-grow">
        <div className="bg-cover bg-center h-[600px] flex items-center justify-center relative overflow-hidden" 
             style={{
               backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
               backgroundPositionY: `${scrollY * 0.5}px`
             }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white z-10 p-8 rounded-lg"
          >
            <h1 className="text-7xl font-bold mb-4 text-shadow">All About Cats</h1>
            <p className="text-3xl text-shadow">Discover the fascinating world of our feline friends</p>
          </motion.div>
        </div>

        <div className="container mx-auto py-24 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-600">Characteristics of Cats</CardTitle>
                  <CardDescription>What makes cats unique?</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-none pl-6 space-y-2">
                    {["Independent nature", "Excellent hunters", "Flexible bodies", "Keen senses", "Complex communication"].map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <Paw className="h-4 w-4 mr-2 text-pink-500" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-600">Popular Cat Breeds</CardTitle>
                  <CardDescription>Spotlight on cat breeds</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentBreedIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <h3 className="text-xl font-semibold mb-2">{catBreeds[currentBreedIndex].name}</h3>
                      <p className="text-gray-600 mb-1">Origin: {catBreeds[currentBreedIndex].origin}</p>
                      <p className="italic">{catBreeds[currentBreedIndex].personality}</p>
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute top-1/2 -translate-y-1/2 left-2">
                    <Button variant="ghost" size="icon" onClick={prevBreed}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-2">
                    <Button variant="ghost" size="icon" onClick={nextBreed}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Cat Fact Generator</CardTitle>
                <CardDescription>Learn interesting facts about cats!</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={catFact}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg mb-4 min-h-[3em]"
                  >
                    {catFact}
                  </motion.p>
                </AnimatePresence>
                <Button 
                  onClick={generateCatFact}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300"
                >
                  Generate New Fact
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Cat Gallery</CardTitle>
                <CardDescription>Adorable feline friends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  ].map((src, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <img src={src} alt={`Cat ${index + 1}`} className="w-full h-40 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {[Facebook, Twitter, Instagram, Github].map((Icon, index) => (
              <motion.a 
                key={index}
                href="#" 
                className="hover:text-gray-300 transition duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
          <p>&copy; 2023 CatWorld. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
