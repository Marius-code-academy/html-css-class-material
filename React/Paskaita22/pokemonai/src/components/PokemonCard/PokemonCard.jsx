import { Box, Card, CardContent, CardHeader, CardMedia, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function PokemonCard({ pokemonData }) {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Card sx={{ minWidth: 200, maxWidth: 300 }}>
        <CardHeader sx={{ textAlign: "center" }} title={pokemonData.name} />
        <CardMedia component={"img"} image={pokemonData.sprites.other["official-artwork"].front_shiny} />
        <CardContent>
          <Typography variant="h5">Types</Typography>
          <List dense>
            {pokemonData.types.map((type) => (
              <ListItem disablePadding key={type.type.name}>
                <ListItemText primary={type.type.name} />
              </ListItem>
            ))}
          </List>
          <Typography variant="h5">Abilities</Typography>
          <List dense>
            {pokemonData.abilities.map((ability) => (
              <ListItem disablePadding key={ability.ability.name}>
                <ListItemText primary={ability.ability.name} />
              </ListItem>
            ))}
          </List>
        </CardContent>
        <Grid padding={2} container spacing={1}>
          {pokemonData.stats.map((stat) => (
            <Grid xs={6} item key={stat.stat.name}>
              <Typography >
                {stat.stat.name} {stat.base_stat}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
}
