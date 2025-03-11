import React, { useState, useEffect } from "react";
import { Box, Container, Card, CardContent, Typography, Grid } from "@mui/material";

// Additional Information Mapped to Characters
const additionalInfo = {
  "Turanga Leela": {
    rating: "10/10",
    details: [
      "✅ Best pilot in the universe.",
      "✅ Highly skilled fighter and strategist.",
      "✅ Almost always gets the job done.",
      "❌ Often has to deal with incompetent crewmates slowing her down.",
    ],
  },
  "Bender Bending Rodríguez": {
    rating: "9/10",
    details: [
      "✅ Super strong, durable, and can store cargo inside his body.",
      "✅ Can get into restricted places using theft and trickery.",
      "✅ Has smuggled and delivered packages even in hostile environments.",
      "❌ Prone to laziness, stealing the cargo, or betraying the mission for profit.",
    ],
  },
  "Kif Kroker": {
    rating: "8/10",
    details: [
      "✅ Smart, capable, and adaptable under stress.",
      "✅ Loyal and skilled at following orders.",
      "✅ Has successfully handled dangerous missions (mostly due to Zapp’s incompetence).",
      "❌ Lacks confidence and can be pushed around.",
    ],
  },
  "Hermes Conrad": {
    rating: "7/10",
    details: [
      "✅ Extremely organized, good at logistics and paperwork.",
      "✅ Physically fit and skilled at bureaucracy-based problem-solving.",
      "✅ Can strategize to avoid unnecessary danger.",
      "❌ Tends to prioritize cost-cutting over efficiency.",
    ],
  },
  "Lord Nibbler": {
    rating: "6/10",
    details: [
      "✅ Super-intelligent, powerful, and resourceful.",
      "✅ Can eat obstacles (literally).",
      "✅ Has intergalactic knowledge and experience.",
      "❌ Small size limits his physical capability.",
    ],
  },
  "LaBarbara Conrad": {
    rating: "6/10",
    details: [
      "✅ No-nonsense and gets things done.",
      "✅ Tough and resourceful, with a commanding presence.",
      "✅ Can leverage Hermes’ skills when needed.",
      "❌ Lacks space travel experience.",
    ],
  },
  "Amy Wong-Kroker": {
    rating: "6/10",
    details: [
      "✅ Intelligent and knowledgeable in engineering.",
      "✅ Fluent in multiple languages, including alien dialects.",
      "✅ Can pilot the ship in a pinch.",
      "❌ Clumsy and accident-prone, which could jeopardize the mission.",
    ],
  },
  "Philip J. Fry": {
    rating: "5/10",
    details: [
      "✅ Surprisingly lucky in dangerous situations.",
      "✅ Can be determined when motivated.",
      "✅ Has actual experience as a delivery boy.",
      "❌ Generally lazy and forgetful.",
      "❌ Prone to getting distracted or messing things up.",
    ],
  },
  "Flexo": {
    rating: "5/10",
    details: [
      "✅ Nearly identical to Bender in abilities.",
      "✅ Can complete a mission when motivated.",
      "❌ Morally ambiguous and unpredictable.",
    ],
  },
  "Hubert J. Farnsworth": {
    rating: "4/10",
    details: [
      "✅ Genius-level intellect.",
      "✅ Invents useful gadgets and ships.",
      "❌ Extremely forgetful, frail, and easily distracted.",
      "❌ May accidentally doom the mission by pressing the wrong button.",
    ],
  },
  "Scruffy Scruffington": {
    rating: "4/10",
    details: [
      "✅ Surprisingly competent in unexpected ways.",
      "✅ Unfazed by danger and does his job without complaint.",
      "❌ Minimal motivation and generally unbothered by failure.",
    ],
  },
  "Zapp Brannigan": {
    rating: "3/10",
    details: [
      "✅ Charismatic and bold (which sometimes helps).",
      "✅ Has military resources.",
      "❌ Overconfident and incompetent; most plans end in disaster.",
      "❌ Likely to ruin the mission for his ego.",
    ],
  },
  "John A. Zoidberg": {
    rating: "2/10",
    details: [
      "✅ Can survive in extreme conditions.",
      "✅ Occasionally useful due to dumb luck.",
      "❌ No common sense; easily distracted by food.",
      "❌ Would probably eat the package.",
    ],
  },
  "Cubert J. Farnsworth": {
    rating: "2/10",
    details: [
      "✅ High intelligence and engineering knowledge.",
      "❌ Arrogant, whiny, and inexperienced.",
      "❌ Would refuse to do the mission because it's 'beneath him.'",
    ],
  },
  "Francis X. Clampazzo": {
    rating: "1/10",
    details: [
      "✅ Resourceful and street-smart.",
      "❌ More likely to steal, destroy, or sell the cargo than deliver it.",
      "❌ Has no sense of duty or work ethic.",
    ],
  },
};

const CrewList = () => {
  const [characters, setCharacters] = useState([]);
  const selectedCharacterIds = [1, 16, 425, 420, 421, 424, 382, 423, 278, 336, 320, 305, 279, 177, 179];

  useEffect(() => {
    const fetchCharacter = async (id) => {
      try {
        const response = await fetch(`https://futuramaapi.com/api/characters/${id}`);
        if (!response.ok) throw new Error(`Failed to fetch character ${id}`);

        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching character:", error);
        return null;
      }
    };

    const fetchAllCharacters = async () => {
      const promises = selectedCharacterIds.map((id) => fetchCharacter(id));
      const results = await Promise.all(promises);
      setCharacters(results.filter((char) => char !== null));
    };

    fetchAllCharacters();
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
    minHeight: "100vh",
    backgroundImage: `url("https://wallpapersok.com/images/hd/futurama-characters-colorful-poster-75g16m83ug7dnxjy.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
      }}
    >
    <Container sx={{ 
        paddingTop: "5%",
        minHeight: "90vh", 
        overflowX: "hidden",
        textAlign: "center",
          }}>
      <Typography variant="h1" sx={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px", color: "white"}}>
        Planet Express Crew
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {characters.length === 0 && (
          <Typography variant="h6" align="center">
            Loading characters...
          </Typography>
        )}
        {characters.map((char) => (
          <Grid item key={char.id} xs={12} sm={6} md={4} lg={3} sx={{ display: "flex", alignItems: "stretch" }}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", alignItems: "center" }}>
              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                
                <Typography
                  variant="h6"
                  sx={{
                    minHeight: "48px", 
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {char.name}
                </Typography>

                {char.image && (
                  <img
                    src={char.image}
                    alt={char.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      objectPosition: "top",
                      borderRadius: "8px",
                      margin: "10px 0",
                    }}
                  />
                )}

                {additionalInfo[char.name] && (
                  <>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      Rating: {additionalInfo[char.name].rating}
                    </Typography>
                    <div style={{ textAlign: "left", marginTop: "8px" }}>
                      {additionalInfo[char.name].details.map((point, index) => (
                        <Typography key={index} variant="body2" sx={{ marginTop: "4px" }}>
                          {point}
                        </Typography>
                      ))}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
};

export default CrewList;