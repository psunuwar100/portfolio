"use strict";

// for job secription section
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

// for job secription section
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    // removing active job description content
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    // removing active job tab status
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    // setting new active status for both button and description
    tab.classList.add("active");
    target.classList.add("active");
  });
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/js/particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});

// defining global variables
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-div");
const navLinks = document.querySelectorAll(".nav-div .nav-link li");

// function for toggling navbar on and off
const toggleNav = function () {
  nav.classList.toggle("nav-active");
  // burger animation
  burger.classList.toggle("toggle");
};

// nav div
const navSlide = () => {
  burger.addEventListener("click", toggleNav);
};

// nav links action on after the link is closed on opened navbar link
const navClick = () => {
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", toggleNav);
  });
};

burger.addEventListener("click", navClick(), navSlide());
