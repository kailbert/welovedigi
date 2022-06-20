import MyComponent from '../../../../slices/ProductVideo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ProductVideo'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"product_video","items":[],"primary":{"title":[{"type":"heading1","text":"Innovate robust experiences","spans":[]}],"description":[{"type":"paragraph","text":"Commodo in ad non aute commodo adipisicing exercitation. Incididunt irure consectetur sunt incididunt officia enim cillum aute ea quis labore. Et dolore ad fugiat elit ut irure voluptate proident exercitation ipsum.","spans":[]}],"video":{"url":"https://twitter.com/timbenniks/status/1304146886832594944","author_name":"Tim Benniks","author_url":"https://twitter.com/timbenniks","html":"<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">I’ve been diving deep on <a href=\"https://twitter.com/prismicio?ref_src=twsrc%5Etfw\">@prismicio</a> <a href=\"https://twitter.com/hashtag/slicemachine?src=hash&amp;ref_src=twsrc%5Etfw\">#slicemachine</a> today. I made all my own components and I used custom slices. It works like a charm with <a href=\"https://twitter.com/nuxt_js?ref_src=twsrc%5Etfw\">@nuxt_js</a>. Also: I’m coding with this view. <a href=\"https://t.co/F0I8X9gz39\">pic.twitter.com/F0I8X9gz39</a></p>&mdash; Tim Benniks (@timbenniks) <a href=\"https://twitter.com/timbenniks/status/1304146886832594944?ref_src=twsrc%5Etfw\">September 10, 2020</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n","width":550,"height":null,"type":"rich","cache_age":"3153600000","provider_name":"Twitter","provider_url":"http://www.twitter.com/","version":"1.0"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
