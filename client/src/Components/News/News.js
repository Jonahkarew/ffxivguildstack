import React, { useEffect, useState } from 'react'
import axios from 'axios';
import cheerio from 'cheerio';
function News() {
    const [photos, setPhotos] = useState([]);

    // const getNews = () => {
    //     let url = `https://na.finalfantasyxiv.com/lodestone/`
    //     axios.get(url, {
            
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Access-Control-Allow-Origin': '*',
    //               }
            
    //     }).then(response => {
    //         const $ = cheerio.load(response.data);
    //         let json = []
    //         $(".news__list--topics").each(
    //             function (){
    //                 var newNews = {
    //                     title: $(this).children().first().text(),
    //                     image: $(this).children(".news__list--banner").children().first().children().first().attr("src"),
    //                     externalLink: `https://na.finalfantasyxiv.com/${$(this).children(".news__list--banner").children("a").attr("href")}`,
    //                     description: $(this).children(".news__list--banner").children(".mdl-text__xs-m16").text()
    //                 }
    //                 json.push(newNews)
    
    
    //             }
    //         )
    //         // return json
    //         console.log("getNews() " +json)
    //     })
    // }

    // const fetchNews = () => {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             // 'Accept': 'application/json',
    //             // 'Content-Type': 'application/json;charset=UTF-8',
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    //             "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    //         }
    //     }
    //     fetch("https://na.finalfantasyxiv.com/lodestone/", options)
    //     .then(res => {
    //         console.log("fetchNews() " + res)
    //     })
    // } 

    const checkNews = () => {
        console.log("this here")
        axios.get("https://giphy.com/gifs/UX4U37Y9mdz3BXNbcA").then(res => {
            const photos = res.data;
            setPhotos(photos)
            console.log(photos)
        })
    }


    useEffect(() => {
        // getNews()
        // fetchNews()
        checkNews()
    })

    return (
        <div>
            
        </div>
    )
}

export default News