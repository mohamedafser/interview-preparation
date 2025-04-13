"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { credentials } from "@/data/credentials";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.email !== email || credentials.password !== password) {
      alert("Invalid credentials");
      return;
    }
    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    if (email === credentials.email || password === credentials.password) {
      localStorage.setItem("token", "loggedIn Successfully");
      localStorage.setItem(
        "user",
        JSON.stringify({ name: credentials.userName, role: credentials.role })
      );
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Container component="main" maxWidth="sm">
        <Paper
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "50px 30px 40px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            sx={{ marginRight: "auto" }}
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link>Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link>Sign Up</Link>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </form>
  );
}
