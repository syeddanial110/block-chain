import { Button, Divider, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import etherumImg from "../../assets/images/ethereum.png";
import UITextField from "../UITextField/UITextField";
import Loader from "../Loader/Loader";

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = () => {};

  return (
    <Grid container py={10} justifyContent='center'>
      <Grid item xs={11} md={6}>
        <Grid container gap={3}>
          <Grid item xs={12} display="flex" justifyContent="center">
            <h1 className="text-white text-3xl text-gradient ">
              Send Crypto
              <br />
              across the world
            </h1>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <p className="text-left mt-5 text-white font-light text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Button variant="contained" onClick={connectWallet}>
              Connect Wallet
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={11} md={4}>
        <div className="w-full h-40 p-2 my-5 eth-card white-glassmorphism">
          <div className="flex justify-between flex-col w-full h-full ">
            <div className="flex justify-between items-start ">
              <div className="w-10 h-10 rounded-full border-2 border-white">
                <img src={etherumImg} alt="etherumImg" />
              </div>
            </div>
            <div>
              <p className="text-white font-light text-sm">Address</p>
              <p className="text-white font-light text-sm">0xasdsad...dfdsf</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-950 p-5 w-full rounded-sm flex flex-col gap-4">
          <UITextField fullWidth placeholder="Address to" name="addressTo" />
          <UITextField
            fullWidth
            placeholder="Amount (ETH)"
            type="number"
            name="amount"
          />
          <UITextField fullWidth placeholder="Keyword (Gif)" name="keyword" />
          <UITextField fullWidth placeholder="Enter Message" name="message" />
          <Divider sx={{ background: "white" }} />
          {isLoading ? <Loader /> : <Button variant="outlined">Buy</Button>}
        </div>
      </Grid>
    </Grid>
  );
};

export default Welcome;
