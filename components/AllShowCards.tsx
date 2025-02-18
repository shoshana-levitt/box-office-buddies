"use client";
import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function AllShowCards() {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch("/api/shows");
        if (!response.ok) {
          throw new Error("Failed to fetch shows");
        }
        const data = await response.json();
        setShows(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching shows:", err);
      }
    };

    fetchShows();
  }, []);

  if (error) {
    return <div>Error loading shows: {error}</div>;
  }

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={1}>
        {shows.map((show) => (
          <Grid item key={show.id} xs={12} sm={6} md={4}>
            <ShowCard show={show} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
