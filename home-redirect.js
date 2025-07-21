<script>
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      let country = data.country;

      switch(country) {
        case "LK":
          window.location.href = "/home-lk";
          break;
        case "US":
          window.location.href = "/home-us";
          break;
        case "GB": // UK is "GB" in country codes
        case "UK": // backup just in case
          window.location.href = "/home-uk";
          break;
        case "AU":
          window.location.href = "/home-au";
          break;
        default:
          window.location.href = "/home-us"; // fallback
      }
    });
</script>