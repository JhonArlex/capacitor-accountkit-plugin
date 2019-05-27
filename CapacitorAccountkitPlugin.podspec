
  Pod::Spec.new do |s|
    s.name = 'CapacitorAccountkitPlugin'
    s.version = '0.0.1'
    s.summary = 'AccountKit plugin for capacitor'
    s.license = 'MIT'
    s.homepage = 'https://github.com/Cclown98/capacitor-accountkit-plugin.git'
    s.author = 'Cclown98'
    s.source = { :git => 'https://github.com/Cclown98/capacitor-accountkit-plugin.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end
