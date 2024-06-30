function calculateWindChill(Ta, V) {
    return 13.12 + (0.6215 * Ta) - (11.37 * Math.pow(V, 0.16)) + (0.3965 * Ta * Math.pow(V, 0.16));
}