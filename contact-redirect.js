<script>
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      let country = data.country;

      switch(country) {
        case "LK":
          window.location.href = "/contact-lk";
          break;
        case "US":
          window.location.href = "/contact-us";
          break;
        case "GB": // UK official country code
        case "UK": // backup in case
          window.location.href = "/contact-uk";
          break;
        case "AU":
          window.location.href = "/contact-au";
          break;
        default:
          window.location.href = "/contact-us"; // fallback
      }
    });
</script>