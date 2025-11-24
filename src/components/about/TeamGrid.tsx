import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Jesus Vargas", role: "Founder", initials: "JV" },
  { name: "Thinh Dinh", role: "Developer", initials: "TD" },
  { name: "Cecilia Varela", role: "Head of Operations", initials: "CV" },
  { name: "Mauricio Paz", role: "Developer", initials: "MP" },
  { name: "Daniel Moreno", role: "Developer", initials: "DM" },
  { name: "Angelica Ledezma", role: "Admin", initials: "AL" },
  { name: "María Romero Victorica", role: "Designer", initials: "MR" },
  { name: "Dominik Szafrański", role: "Developer", initials: "DS" },
  { name: "Douglas Almeida", role: "Developer", initials: "DA" },
  { name: "Daniela Silva", role: "Developer", initials: "DS" },
  { name: "Valeria Girbau", role: "Customer Success", initials: "VG" },
  { name: "Katherine Gonzalez", role: "Customer Success", initials: "KG" },
  { name: "Giuliana Tregnaghi", role: "Designer", initials: "GT" },
  { name: "Catalina Fernandez", role: "Designer", initials: "CF" },
  { name: "Andrea Monroy", role: "Customer Success", initials: "AM" },
  { name: "Javieri Pratama", role: "Developer", initials: "JP" },
  { name: "Josefina Hernandez", role: "Customer Success", initials: "JH" },
  { name: "Diego Tostado", role: "Customer Success", initials: "DT" },
  { name: "Italo Saraiva", role: "Developer", initials: "IS" },
  { name: "Ariel Lucas Luduvig", role: "Developer", initials: "AL" },
  { name: "Wallace Ribeiro", role: "Customer Success", initials: "WR" },
  { name: "Gustavo Patinho", role: "Developer", initials: "GP" },
  { name: "Rômulo Carneiro", role: "Customer Success", initials: "RC" },
  { name: "Daisy Embate", role: "Customer Success", initials: "DE" },
  { name: "Leonardo Campos", role: "Developer", initials: "LC" },
  { name: "Luiz Cordeiro", role: "Developer", initials: "LC" },
  { name: "Ricardo Campos", role: "Developer", initials: "RC" },
  { name: "Niño Abadiez", role: "Customer Success", initials: "NA" },
  { name: "Regis Soares", role: "Developer", initials: "RS" },
  { name: "Ilry Polis", role: "Developer", initials: "IP" },
  { name: "Josue Belmonte", role: "Developer", initials: "JB" },
  { name: "Enrique Patinho", role: "Designer", initials: "EP" },
  { name: "Ariel Arazi", role: "Customer Success", initials: "AA" },
  { name: "Karoline Duarte", role: "Customer Success", initials: "KD" },
  { name: "Marconi Vital", role: "Developer", initials: "MV" },
];

export const TeamGrid = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Makes Us the Best
          </h2>
          <p className="text-xl text-muted-foreground">Our Team</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 text-center hover-lift transition-all duration-300">
              <Avatar className="h-20 w-20 mx-auto mb-4">
                <AvatarFallback className="bg-primary/10 text-primary text-lg">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </Card>
          ))}
          
          <Card className="p-6 text-center hover-lift transition-all duration-300 border-dashed border-2 bg-muted/30">
            <Avatar className="h-20 w-20 mx-auto mb-4">
              <AvatarFallback className="bg-primary/10 text-primary text-lg">
                ?
              </AvatarFallback>
            </Avatar>
            <h3 className="font-semibold mb-1">You?</h3>
            <a href="#" className="text-sm text-primary hover:underline">
              Access our Jobs Portal
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};
