import {
  Code, ShoppingCart, Palette, Megaphone, Camera, Bot, Lightbulb, MessageCircle, Workflow, FileText,
  Database, Smartphone, Search, Rocket, PenTool, Target, Zap, Layers, Server, ShoppingBag, Home,
  Stethoscope, UtensilsCrossed, GraduationCap, Briefcase, Truck, Users, Headphones, FileLock2,
  KeyRound, LineChart, MessagesSquare, Heart, Film, Image, Globe, Video, Clock, Gem, User, Cake, PartyPopper, Star,
} from "lucide-react";

const icons = {
  Code, ShoppingCart, Palette, Megaphone, Camera, Bot, Lightbulb, MessageCircle, Workflow, FileText,
  Database, Smartphone, Search, Rocket, PenTool, Target, Zap, Layers, Server, ShoppingBag, Home,
  Stethoscope, UtensilsCrossed, GraduationCap, Briefcase, Truck, Users, Headphones, FileLock2,
  KeyRound, LineChart, MessagesSquare, Heart, Film, Image, Globe, Video, Clock, Gem, User, Cake, PartyPopper, Star,
};

export default function Icon({ name, ...props }) {
  const C = icons[name] || Zap;
  return <C {...props} />;
}
