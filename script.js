function beer() {  
    if (confirm("Do you want to see the lyrics to the beer song?")) {
  for (i = 99 ; i > 0 ; i--) {
    j = i - 1;
    if (i != 1) { 
      icase = "bottles"; 
    } else { 
      icase = "bottle";
    }
    if (j != 1) {
      jcase = "bottles";
    } else {
      jcase = "bottle";
    }
    document.writeln(i + " " + icase + " of beer on the wall,");
    document.writeln(i + " " + icase + " of beer,");
    document.writeln("Take 1 down, pass it around,");
    if (j != 0) {
      document.writeln(j + " " + jcase + " of beer on the wall.");
    } else {
      document.writeln("No more bottles of beer on the wall!");
    }
    document.writeln()
  }
} else {
  document.write("You might want think about moving to another community.")
}
}
