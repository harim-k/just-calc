$(".dropdown-currency ul.dropdown-menu span").on("click", function () {
    var o = $(this).html();
    return $(".dropdown-currency .dropdown-toggle span:first").html(o),
     $(".dropdown-currency .dropdown-toggle").dropdown("toggle"),
      $("span.currency").html(o), $('input[name="calc_fields[unit]"]').val(o), !1
});
var options = {
    colors: colors,
    series: series,
    chart: {
        type: "bar",
        stacked: !0,
        height: 400,
        animations: {
            enabled: !1
        },
        toolbar: {
            show: !0
        }
    },
    title: {
        align: "center",
        style: {
            fontSize: "16px"
        }
    },
    dataLabels: {
        enabled: !1
    },
    grid: {
        borderColor: "#000",
        position: "back",
        strokeDashArray: [1, 3]
    },
    fill: {
        opacity: 1,
        colors: colors
    },
    legend: {
        position: "bottom",
        offsetY: 10,
        fontSize: "14px",
        fontFamily: "monospace",
        color: "#000"
    },
    tooltip: {
        enabled: !0
    },
    xaxis: {
        labels: {
            style: {
                fontSize: "14px",
                fontFamily: "monospace"
            }
        },
        axisBorder: {
            color: "#000",
            offsetY: 10
        },
        axisTicks: {
            color: "#000",
            height: 5
        },
        categories: categories
    },
    yaxis: {
        title: {
            style: {
                fontSize: "14px"
            }
        },
        labels: {
            style: {
                fontSize: "14px",
                fontFamily: "monospace"
            },
            offsetX: -8
        },
        axisBorder: {
            show: !0,
            color: "#000"
        },
        axisTicks: {
            show: !0,
            color: "#000",
            width: 5
        }
    }
},
    chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();