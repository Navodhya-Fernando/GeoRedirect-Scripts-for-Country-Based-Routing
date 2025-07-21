<script>
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      let country = data.country;

      switch(country) {
        case "LK":
          window.location.href = "/pricing-lk";
          break;
        case "US":
          window.location.href = "/pricing-us";
          break;
        case "GB": // UK official country code
        case "UK": // backup in case
          window.location.href = "/pricing-uk";
          break;
        case "AU":
          window.location.href = "/pricing-au";
          break;
        default:
          window.location.href = "/pricing-us"; // fallback
      }
    });
</script>