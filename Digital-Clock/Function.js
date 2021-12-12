//Windows(https://open.kakao.com/me/Windows, https://github.com/WindowsSystem32)가 제작함, CC-BY-NC-SA
function dc (on, off) {
  if (on == undefined || on == null) {
    on = "■";
  }
  if (off == undefined || off == null) {
    off = "□";
  }
  var ca = [[on + on + on, on + off + on, on + off + on, on + off + on, on + on + on], //0
  [off + off + on, off + off + on, off + off + on, off + off + on, off + off + on], //1
  [on + on + on, off + off + on, on + on + on, on + off + off, on + on + on], //2
  [on + on + on, off + off + on, on + on + on, off + off + on, on + on + on], //3
  [on + off + on, on + off + on, on + on + on, off + off + on, off + off + on], //4
  [on + on + on, on + off + off, on + on + on, off + off + on, on + on + on], //5
  [on + on + on, on + off + off, on + on + on, on + off + on, on + on + on], //6
  [on + on + on, on + off + on, off + off + on, off + off + on, off + off + on], //7
  [on + on + on, on + off + on, on + on + on, on + off + on, on + on + on], //8
  [on + on + on, on + off + on, on + on + on, off + off + on, on + on + on], //9
  [off + off + off, off + on + off, off + off + off, off + on + off, off + off + off]];//:
  var dt = new Date();
  var h0 = String(dt.getHours());
  var h1 = boolToStr(h0 < 10, "0", h0[0]);
  var h2 = boolToStr(h0 < 10, h0[0], h0[1]);
  var m0 = String(dt.getMinutes());
  var m1 = boolToStr(m0 < 10, "0", m0[0]);
  var m2 = boolToStr(m0 < 10, m0[0], m0[1]);
  var out = new Array;
  for (var i = 0; i < 5; i++) {
    out.push(ca[h1][i] + " " + ca[h2][i] +  " " + ca[10][i] + " " + ca[m1][i] + " " + ca[m2][i]);
  }
  //dt.getHours() + ":" + dt.getMinutes()
  var out2 = out.join(ln);
  return lw3 + ln + out2;
}

function boolToStr (bool, t, f, e) {
  var out = e;
  try {
    if (bool) {
      out = t;
    } else {
      out = f;
    }
  } catch (err) {
    
  }
  return out;
}
