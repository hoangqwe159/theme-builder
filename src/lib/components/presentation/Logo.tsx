interface LogoProps {
  width?: number
  height?: number
  fill?: string
  opacity?: number
}

export default function Logo({
  width = 28,
  height = 48,
  fill = '#7499ff',
  opacity = 1,
}: LogoProps): React.ReactElement {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      opacity={opacity}
    >
      <title>TasHelixLogoSvg</title>
      <g id="Group_1298" data-name="Group 1298" transform="translate(-12.428)">
        <g id="Group_645" data-name="Group 645" transform="translate(12.428)">
          <path
            id="Path_170"
            data-name="Path 170"
            d="M143.861,71.289a8.343,8.343,0,0,1,.8,3.16,10.268,10.268,0,0,1-3.533,8.874c-4.411,3.974-9.026,7.711-13.469,11.647a36.011,36.011,0,0,0-4.07,4.075,10.971,10.971,0,0,0-2.228,8.863c.559,4.124,3.156,6.755,6.513,8.828.256.158.583.223.761.516-.3.157-.523-.054-.751-.148a12.3,12.3,0,0,1-6.921-6.85,16.7,16.7,0,0,1-.273-12.754,11.076,11.076,0,0,1,2.644-3.984c5-5,10.463-9.494,15.7-14.235.606-.548,1.208-1.1,1.785-1.679A8.894,8.894,0,0,0,143.861,71.289Z"
            transform="translate(-119.56 -69.399)"
          />
          <path
            id="Path_171"
            data-name="Path 171"
            d="M163.971,322.291c-.985-.733-1.891-1.491-2.882-2.115a5.58,5.58,0,0,0-2.17-.431q-4.942-.785-9.9-1.5c-.6-.087-.611-.222-.315-.729a2.1,2.1,0,0,1,2.718-1.215,50.257,50.257,0,0,0,5.243.918,2.856,2.856,0,0,0,.443,0c-.023-.329-.311-.411-.5-.56-1.157-.9-2.314-1.8-3.492-2.668-.369-.273-.475-.447-.063-.787.666-.55,1.3-1.142,1.921-1.742.265-.256.441-.239.723-.02,2.859,2.23,5.817,4.335,8.59,6.674a17.159,17.159,0,0,1,3.7,4.2,5.739,5.739,0,0,1-.2,5.744,5.8,5.8,0,0,0-1.244-2.858,1.112,1.112,0,0,0-.912-.46q-7.926-.29-15.851-.61c-.768-.03-1.536-.1-2.3-.105-.419,0-.554-.169-.538-.555.014-.359.012-.72,0-1.079-.016-.415.122-.6.584-.581,2.21.092,4.421.148,6.631.23,2.017.074,4.033.182,6.051.241C161.424,322.32,162.642,322.291,163.971,322.291Z"
            transform="translate(-144.327 -286.476)"
          />
          <path
            id="Path_172"
            data-name="Path 172"
            d="M127.833,55.025a18.69,18.69,0,0,0-3.689,3.416,10.41,10.41,0,0,0-2.434,6.108c-.023.571.078.667.6.532,1.929-.5,3.864-.966,5.8-1.446q6.5-1.615,12.994-3.229c.2-.051.413-.079.683-.129a8.38,8.38,0,0,1-2.474,2.669,8.995,8.995,0,0,1-2.762.728q-7.077,1.814-14.164,3.588c-.555.138-.67.385-.571.9.3,1.562.284,1.559,1.849,1.182q5.32-1.279,10.641-2.55a.934.934,0,0,1,.7.025c-1.479,1.023-2.393,2.583-4.276,2.98-2.393.505-4.743,1.209-7.117,1.8-.473.118-.6.237-.287.685a12.562,12.562,0,0,0,2.023,2.335c.391.34.31.538-.016.839-.617.57-1.224,1.155-1.8,1.771-.355.382-.534.3-.8-.095a17.3,17.3,0,0,1-2.68-7.37,15.433,15.433,0,0,1,1.669-9.195,14.04,14.04,0,0,1,5.934-5.694C127.823,54.814,127.852,54.892,127.833,55.025Z"
            transform="translate(-119.896 -54.536)"
          />
          <path
            id="Path_173"
            data-name="Path 173"
            d="M201.132,51.981l-.166-.144a1.349,1.349,0,0,1,.747-.346A1.012,1.012,0,0,1,201.132,51.981Z"
            transform="translate(-193.194 -51.492)"
          />
        </g>
      </g>
    </svg>
  )
}
