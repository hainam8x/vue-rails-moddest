// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// Vue stuff here
import { createApp } from 'vue'

import Widget from '../components/Widget'
// I could import more components here

const components = { Widget } // An object to hold components

// Normally this would be done with 'DOMContentLoaded', but Turbolinks breaks that
document.addEventListener("turbolinks:load", () => {
  // Find everything with a data-component
  document.querySelectorAll('[data-component]').forEach((node) => {
    // mount the respective Vue component
    createApp(components[node.dataset.component]).mount(node)
  })
})